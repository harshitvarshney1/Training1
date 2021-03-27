
using CalculatorLib;

namespace ExtensionMethodDemo
{
    public static class MyExtensionMethods
    {
        public static int Mul(this Calculator c)
        {
            int res = c.Num1 * c.Num2;
            return res;
        }

        public static int countvowel(this string str)
        {
            int result = 0;
            string newstr = str.ToLower();
            for(int i=0;i<newstr.Length;i++)
            {
                switch(newstr[i])
                {
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u': result++; break;
                }
            }
            return result;
        }
       
    }
}
