public class MIS311Solution {

    // ------------------------------------------------------------------
    // 1. الطريقة getDensity (النقطة 1)
    // ------------------------------------------------------------------
    /**
     * تحسب الكثافة السكانية (population / area).
     * @param area مساحة المنطقة (double).
     * @param population عدد السكان (double).
     * @return قيمة الكثافة السكانية (double).
     */
    public double getDensity(double area, double population) {
        if (area > 0) {
            return population / area;
        } else {
            return 0.0;
        }
    }

    // ------------------------------------------------------------------
    // 2. الطريقة helloThere (النقطة 2)
    // ------------------------------------------------------------------
    /**
     * تُنشئ رسالة ترحيبية.
     * @param name الاسم (String).
     * @return نص ترحيبي: "Hello there " مضافاً إليه الاسم.
     */
    public String helloThere(String name) {
        return "Hello there " + name;
    }

    // ------------------------------------------------------------------
    // 3. و 4. تنفيذ إنشاء وإسناد الكائن (Main Method)
    // ------------------------------------------------------------------
    public static void main(String[] args) {
        
        
        
        // 3. اكتب جملة جافا لإنشاء الكائن ahmed من النوع Employee.
        Employee ahmed = new Employee();

        // 4. اكتب جمل جافا لإسناد القيم التالية إلى الكائن ahmed
        // . الاسم: أحمد إبراهيم
        // . الوظيفة: مدرب
        // . سنوات الخبرة: 6 سنوات
        // . الراتب: 6700
        
        ahmed.setName("Ahmed Ibrahim"); 
        ahmed.setJobTitle("Coach"); 
        ahmed.setYearsOfExperience(6); 
        ahmed.setSalary(6700); 

        System.out.println("The object ahmed was created and the values were assigned successfully:");
        System.out.println(ahmed); 
        
        // --- اختبار الطرق (اختياري) ---
        
        MIS311Solution solver = new MIS311Solution();
        
        System.out.println("\n---  getDensity ---");
        System.out.println("Density (10000 / 200): " + solver.getDensity(200.0, 10000.0));
        
        System.out.println("\n---  helloThere ---");
        System.out.println("Welcome: " + solver.helloThere("Khaled"));
    }
}