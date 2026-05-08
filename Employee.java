public class Employee {
    // المتغيرات الخاصة (Fields) للموظف
    private String name;
    private String jobTitle;
    private int yearsOfExperience;
    private double salary;

    // المُحددات (Setters) لإسناد القيم
    // لتنفيذ النقطة 4: إسناد البيانات للكائن ahmed
    public void setName(String name) {
        this.name = name;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public void setYearsOfExperience(int yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    // (اختياري) Getters و toString للمراجعة/العرض
    @Override
    public String toString() {
        return "Employee Details:\n" +
               "  - Name: " + name + "\n" +
               "  - Job Title: " + jobTitle + "\n" +
               "  - Experience: " + yearsOfExperience + " years\n" +
               "  - Salary: " + salary;
    }
}