import LeadCaptureForm from "@/components/LeadCaptureForm";
import AboutSection from "@/components/AboutSection";
import { CheckCircle, Star, Users, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-healthLight/30 to-background" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center">
            {/* Hero Content */}
            <div className="space-y-8 text-center">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-successGreen/10 text-successGreen px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4 ml-2" />
                  מדריך חינמי ומקיף
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  איזון הסוכר{" "}
                  <span className="bg-gradient-to-l from-healthPrimary to-healthSecondary bg-clip-text text-transparent">
                    בזמן החגים
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                עוברים את החגים בלי קפיצות סוכר – ובלי לוותר על האוכל הטעים!
                <br />אתם בטח שואלים איך?<br /> בדיוק בשביל זה הכנתי לכם מדריך קצר, פשוט וישים 
                  שיעזור לכם לעבור את חגי תשרי באיזון סוכר מלא – בלי רגשות אשם ובלי דיאטות.
                </p>
              </div>

              {/* Lead Capture Form */}
              <div className="max-w-md mx-auto">
                <LeadCaptureForm />
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-healthSecondary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-healthPrimary/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-4 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-l from-healthPrimary to-healthSecondary bg-clip-text text-transparent">
              קבלו הצצה למדריך 
              <span className="text-healthPrimary">👀</span>
            </h2>
            <div className="w-1/2 mx-auto rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="/src/assets/freeguidr.png" 
                alt="הצצה למדריך החינמי" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-healthLight/20">
        <AboutSection />
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            מוכן להתחיל את המסע לחגים בריאים?
          </h2>
          <p className="text-lg text-muted-foreground">
            הורד עכשיו את המדריך החינמי ותתחיל ליהנות מחגים ללא דאגות
          </p>
          <div className="max-w-md mx-auto">
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-healthLight">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 בר דיאמנט קמינסקי - דיאטנית קלינית | כל הזכויות שמורות</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
