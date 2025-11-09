// ServerManager.cs
// يمثل جسر الاتصال بين العميل (Unity) والخادم (Python/Flask)
// يستخدم لطلب حساب القتال من نقطة نهاية Combat/calculate.

using System.Collections;
using UnityEngine;
using UnityEngine.Networking; // مكتبة الاتصال الشبكي في Unity
using System.Text;
using System;
using Newtonsoft.Json; // يجب إضافة مكتبة JSON خفيفة الوزن للمشروع

public class ServerManager : MonoBehaviour
{
    // العنوان الأساسي للخادم (يجب استبداله بعنوان الخادم الفعلي)
    private const string BASE_URL = "http://localhost:5000/api/v1/";
    
    // نموذج بيانات بسيط لتمثيل رد الخادم
    [Serializable]
    public class CombatResponse
    {
        public string status;
        public string message;
        public float total_raw_damage;
        public string[] minimax_suggestion;
    }

    /// <summary>
    /// يرسل طلب POST إلى الخادم لحساب نتيجة القتال باستخدام Minimax.
    /// </summary>
    /// <param name="attackUnits">تشكيلة وحدات الهجوم.</param>
    /// <param name="defenseUnits">تشكيلة وحدات الدفاع.</param>
    public IEnumerator CalculateCombat(string[] attackUnits, string[] defenseUnits)
    {
        string endpoint = BASE_URL + "combat/calculate";
        
        // 1. بناء بيانات الطلب (Payload) بصيغة JSON
        var payload = new {
            attack = attackUnits,
            defense = defenseUnits
        };
        string jsonPayload = JsonConvert.SerializeObject(payload);
        
        // 2. إعداد الطلب الشبكي (POST Request)
        using (UnityWebRequest www = new UnityWebRequest(endpoint, "POST"))
        {
            byte[] bodyRaw = Encoding.UTF8.GetBytes(jsonPayload);
            www.uploadHandler = new UploadHandlerRaw(bodyRaw);
            www.downloadHandler = new DownloadHandlerBuffer();
            
            // تعيين نوع المحتوى (Content Type) إلى JSON
            www.SetRequestHeader("Content-Type", "application/json");

            // 3. إرسال الطلب وانتظار الرد
            yield return www.SendWebRequest();

            // 4. تحليل الرد
            if (www.result != UnityWebRequest.Result.Success)
            {
                // إذا فشل الاتصال بالخادم (سيرفر غير متوفر)
                Debug.LogError($"Combat API Error: {www.error}");
            }
            else
            {
                // الاتصال نجح - نقوم بتحليل البيانات المسترجعة
                string responseJson = www.downloadHandler.text;
                Debug.Log($"Server Response: {responseJson}");

                try
                {
                    CombatResponse response = JsonConvert.DeserializeObject<CombatResponse>(responseJson);
                    
                    if (response.status == "success")
                    {
                        Debug.Log($"Minimax Damage: {response.total_raw_damage}");
                        Debug.Log($"AI Suggestion: {string.Join(", ", response.minimax_suggestion)}");
                        
                        // هنا يتم استدعاء دالة تحديث واجهة المستخدم (UI) بنتيجة القتال
                        // Example: UIManager.Instance.DisplayCombatResult(response.total_raw_damage);
                    }
                    else
                    {
                        Debug.LogError($"Server Calculation Failed: {response.message}");
                    }
                }
                catch (Exception ex)
                {
                    Debug.LogError($"JSON Parsing Error: {ex.Message}");
                }
            }
        }
    }
}