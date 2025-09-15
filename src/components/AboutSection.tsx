import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Card className="bg-card/80 backdrop-blur-sm border-healthSecondary/20">
        <CardContent className="p-8 text-right" dir="rtl">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-bl from-healthPrimary to-healthSecondary flex items-center justify-center text-white text-3xl font-bold">
              ד״ר
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                ד״ר שרה כהן - מומחית תזונה קלינית
              </h3>
              
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="bg-healthLight text-healthAccent">
                  דיאטנית קלינית מוסמכת
                </Badge>
                <Badge variant="secondary" className="bg-healthLight text-healthAccent">
                  מומחית בסוכרת
                </Badge>
                <Badge variant="secondary" className="bg-healthLight text-healthAccent">
                  15+ שנות ניסיון
                </Badge>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  שלום, אני ד״ר שרה כהן, דיאטנית קלינית מוסמכת עם התמחות בטיפול ובאיזון רמות הסוכר. 
                  במשך יותר מ-15 שנה אני מסייעת לאנשים להשיג איזון מושלם ברמות הסוכר בדם, 
                  במיוחד בתקופות מאתגרות כמו החגים.
                </p>
                
                <p>
                  פיתחתי מתודה ייחודית שמאפשרת ליהנות מהחגים ללא ויתורים מיותרים, 
                  תוך שמירה על רמות סוכר יציבות ובריאות מיטבית. המדריך החינמי שלי כבר עזר 
                  לאלפי אנשים לעבור את תקופת החגים בביטחון ובבריאות.
                </p>

                <div className="bg-healthLight/50 p-4 rounded-lg border border-healthSecondary/20">
                  <p className="font-medium text-healthAccent">
                    💡 "החגים לא צריכים להיות מלחמה נגד הסוכר שלכם - 
                    הם יכולים להיות תקופה של הנאה מבוקרת ובריאה"
                  </p>
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