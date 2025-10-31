import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />

      <div className="container py-16 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <Icon name="Mail" className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Контакты
          </h1>
          <p className="text-lg text-muted-foreground">
            Свяжись с нами удобным способом
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-12 animate-slide-up">
          <Card className="hover:shadow-xl transition-all hover:scale-105">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground mb-2">
                    Для общих вопросов и предложений
                  </p>
                  <a href="mailto:info@reviews.ru" className="text-primary hover:underline">
                    info@reviews.ru
                  </a>
                  <br />
                  <a href="mailto:support@reviews.ru" className="text-primary hover:underline">
                    support@reviews.ru
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:scale-105">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                  <p className="text-muted-foreground mb-2">
                    Горячая линия: 9:00 - 21:00 МСК
                  </p>
                  <a href="tel:88005553535" className="text-primary hover:underline text-xl font-semibold">
                    8 800 555-35-35
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Звонок бесплатный
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:scale-105">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Telegram</h3>
                  <p className="text-muted-foreground mb-2">
                    Напиши нам в мессенджер
                  </p>
                  <a href="https://t.me/reviewsplus" className="text-primary hover:underline">
                    @reviewsplus
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:scale-105">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    Россия, г. Москва<br />
                    ул. Примерная, д. 1<br />
                    офис 100
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="animate-scale-in">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Социальные сети</h2>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Icon name="Facebook" className="h-6 w-6 text-white" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Icon name="Twitter" className="h-6 w-6 text-white" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Icon name="Instagram" className="h-6 w-6 text-white" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Icon name="Linkedin" className="h-6 w-6 text-white" />
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center text-muted-foreground">
          <p className="mb-2">
            <strong>Время работы поддержки:</strong> Ежедневно с 9:00 до 21:00 МСК
          </p>
          <p>
            Среднее время ответа: менее 1 часа
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
