import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Rules = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />

      <div className="container py-16 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <Icon name="BookOpen" className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Правила публикации
          </h1>
          <p className="text-lg text-muted-foreground">
            Прочти перед размещением отзыва
          </p>
        </div>

        <div className="space-y-6 animate-slide-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="FileText" className="h-5 w-5 text-primary" />
                Основные требования
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Правдивость информации</h3>
                  <p className="text-sm text-muted-foreground">
                    Отзыв должен содержать только достоверную информацию о реальной покупке и опыте
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Подтверждение скриншотами</h3>
                  <p className="text-sm text-muted-foreground">
                    Обязательно приложи оригинальные скриншоты удаленного отзыва с маркетплейса
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Конструктивность</h3>
                  <p className="text-sm text-muted-foreground">
                    Отзыв должен быть объективным, без оскорблений и ненормативной лексики
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Image" className="h-5 w-5 text-secondary" />
                Требования к скриншотам
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Скриншоты должны быть четкими и читаемыми</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>На скриншоте должен быть виден твой удаленный отзыв</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Личные данные будут автоматически скрыты модератором</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Форматы: PNG, JPG (до 10 МБ каждый)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Максимум 10 скриншотов на один отзыв</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Shield" className="h-5 w-5 text-accent" />
                Процесс модерации
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Как долго проверяется отзыв?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Модерация занимает от 24 до 72 часов. Мы тщательно проверяем все скриншоты и информацию.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Что проверяет модератор?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Модератор проверяет подлинность скриншотов, соответствие информации, отсутствие оскорблений 
                    и нецензурной лексики, а также скрывает личные данные на изображениях.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Почему отзыв может быть отклонен?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Отзыв отклоняется, если: нет подтверждающих скриншотов, содержит оскорбления, 
                    недостоверную информацию, или не соответствует правилам платформы.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Можно ли отредактировать отзыв?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Да, до момента публикации ты можешь отредактировать отзыв в личном кабинете. 
                    После публикации правки возможны только через повторную модерацию.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="XCircle" className="h-5 w-5 text-destructive" />
                Запрещено
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="X" className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Размещать ложные или недостоверные отзывы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Использовать нецензурную лексику и оскорбления</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Публиковать личные данные третьих лиц</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Размещать рекламу или спам</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Дублировать один и тот же отзыв</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Rules;
