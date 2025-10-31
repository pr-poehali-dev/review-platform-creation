import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';

const Home = () => {
  const marketplaces = [
    { name: 'OZON', color: 'bg-blue-500', reviews: 1234 },
    { name: 'Wildberries', color: 'bg-purple-500', reviews: 2156 },
    { name: 'Яндекс Маркет', color: 'bg-yellow-500', reviews: 987 },
    { name: 'Магнит Маркет', color: 'bg-green-500', reviews: 543 },
  ];

  const recentReviews = [
    {
      id: 1,
      marketplace: 'Wildberries',
      seller: 'ТехноМир',
      product: 'Беспроводные наушники XYZ',
      rating: 1,
      status: 'verified',
      date: '2024-10-30',
      text: 'Продавец заблокировал мой отзыв о браке товара. Прикладываю оригинальные скриншоты.',
    },
    {
      id: 2,
      marketplace: 'OZON',
      seller: 'МегаСтор',
      product: 'Смартфон ABC Pro',
      rating: 2,
      status: 'moderation',
      date: '2024-10-29',
      text: 'Товар не соответствует описанию. Отзыв удален продавцом.',
    },
    {
      id: 3,
      marketplace: 'Яндекс Маркет',
      seller: 'ЭлектроДом',
      product: 'Умная колонка Mini',
      rating: 1,
      status: 'verified',
      date: '2024-10-28',
      text: 'Получил б/у товар вместо нового. Продавец не реагирует на претензии.',
    },
  ];

  const stats = [
    { label: 'Всего отзывов', value: '4,920', icon: 'FileText', color: 'text-primary' },
    { label: 'Проверенных', value: '3,456', icon: 'CheckCircle', color: 'text-green-500' },
    { label: 'Пользователей', value: '1,234', icon: 'Users', color: 'text-secondary' },
    { label: 'Маркетплейсов', value: '4', icon: 'Store', color: 'text-accent' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />

      <section className="container py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <Badge className="px-4 py-2 text-sm font-medium" variant="secondary">
            <Icon name="Shield" className="mr-2 h-4 w-4" />
            Честные отзывы о маркетплейсах
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            Место, где твой голос{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              не заблокируют
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Публикуй отзывы о товарах и продавцах, которые были удалены на маркетплейсах. 
            Помогай другим покупателям делать правильный выбор.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to="/reviews">
              <Button size="lg" className="text-base font-semibold px-8 transition-all hover:scale-105">
                <Icon name="Search" className="mr-2 h-5 w-5" />
                Найти отзыв
              </Button>
            </Link>
            <Link to="/profile">
              <Button size="lg" variant="outline" className="text-base font-semibold px-8 transition-all hover:scale-105">
                <Icon name="PenSquare" className="mr-2 h-5 w-5" />
                Оставить отзыв
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Icon name={stat.icon as any} className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Маркетплейсы
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {marketplaces.map((mp, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer overflow-hidden group"
            >
              <div className={`h-2 ${mp.color} group-hover:h-3 transition-all`} />
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-2">{mp.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {mp.reviews} отзывов
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Последние отзывы
          </h2>
          <Link to="/reviews">
            <Button variant="ghost" className="group">
              Все отзывы
              <Icon name="ArrowRight" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentReviews.map((review) => (
            <Card 
              key={review.id} 
              className="hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant={review.status === 'verified' ? 'default' : 'secondary'}>
                    {review.status === 'verified' ? (
                      <>
                        <Icon name="CheckCircle" className="mr-1 h-3 w-3" />
                        Проверено
                      </>
                    ) : (
                      <>
                        <Icon name="Clock" className="mr-1 h-3 w-3" />
                        На модерации
                      </>
                    )}
                  </Badge>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {review.product}
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Store" className="h-3 w-3" />
                    {review.marketplace} • {review.seller}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {review.text}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{review.date}</span>
                  <span className="flex items-center gap-1">
                    <Icon name="Eye" className="h-3 w-3" />
                    124
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-16 mb-16">
        <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-none">
          <CardContent className="py-16 text-center">
            <Icon name="Shield" className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готов поделиться своим опытом?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Зарегистрируйся и помоги другим покупателям узнать правду о товарах и продавцах
            </p>
            <Link to="/profile">
              <Button size="lg" className="text-base font-semibold px-8 transition-all hover:scale-105">
                <Icon name="UserPlus" className="mr-2 h-5 w-5" />
                Зарегистрироваться
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
