import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile-tova.jpg";

const AboutSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Card className="bg-card/80 backdrop-blur-sm border-healthSecondary/20">
        <CardContent className="p-8 text-right" dir="rtl">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-healthPrimary/20">
              <img 
                src={profileImage} 
                alt="בר דיאמנט קמינסקי - דיאטנית קלינית מומחית בסוכרת"
                className="w-full h-full object-cover "
              />
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                בר דיאמנט קמינסקי - דיאטנית קלינית מומחית בסוכרת
              </h3>
              
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="bg-healthLight text-healthAccent">
                  דיאטנית קלינית מוסמכת
                </Badge>
                <Badge variant="secondary" className="bg-healthLight text-healthAccent">
                  מומחית בסוכרת
                </Badge>
                <Badge variant="secondary" className="bg-healthLight text-healthAccent">
                  מאז 2019
                </Badge>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  אני דיאטנית קלינית מאז 2019, ובשנים האחרונות אני חיה ונושמת תזונה ואנשים. את דרכי התחלתי בלימודים באוניברסיטה העברית, ולאחר הסטאז׳ בחרתי להתמחות דווקא בתחום שמרגש אותי במיוחד – סוכרת.
                </p>
                
                <p>
                  עשיתי קורס מקצועי לסוכרת באוניברסיטת תל אביב, ומשם המשכתי לעבוד במכוני סוכרת של מכבי וכללית. שם זכיתי ללוות מאות מטופלים – עם סוכרת מסוג 1, סוג 2 וגם סוכרת הריון – ולעזור להם למצוא את הדרך שלהם לאיזון.
                </p>

                <p>
                  עם הזמן פיתחתי גישה משלי: שילוב של ידע מקצועי, ליווי צמוד ואכילה קשובה, שמאפשר להגיע לאיזון ולשמור עליו לאורך זמן – בלי דיאטות מתישות ובלי רגשות אשם.
                </p>

                <div className="bg-healthLight/50 p-4 rounded-lg border border-healthSecondary/20 space-y-4">
                  <p className="font-medium text-healthAccent">
                    את הידע והניסיון הזה הבאתי ליצירת הסדנה לאיזון סוכר ואורח חיים בריא, שבה אני מלמדת איך לעשות שינוי אמיתי, פרקטי וקליל — כזה שמשתלב בחיים עצמם ומחזיר שליטה, בריאות ושקט.
                  </p>
                  <div className="flex justify-center">
                    <a 
                      href="https://www.barr-diamant.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-l from-healthPrimary to-healthSecondary rounded-full hover:opacity-90 transition-opacity"
                    >
                      לפרטים נוספים על הסדנה
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutSection;