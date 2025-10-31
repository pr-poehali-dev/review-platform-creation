import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [marketplace, setMarketplace] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const reviews = [
    {
      id: 1,
      marketplace: 'Wildberries',
      seller: 'ТехноМир',
      product: 'Беспроводные наушники XYZ',
      article: 'WB-12345678',
      rating: 1,
      status: 'verified',
      date: '2024-10-30',
      views: 234,
      text: 'Продавец заблокировал мой отзыв о браке товара. Товар пришел с дефектом, наушники не держат заряд более 2 часов вместо заявленных 24. Прикладываю оригинальные скриншоты удаленного отзыва.',
      screenshots: 3,
    },
    {
      id: 2,
      marketplace: 'OZON',
      seller: 'МегаСтор',
      product: 'Смартфон ABC Pro',
      article: 'OZ-98765432',
      rating: 2,
      status: 'verified',
      date: '2024-10-29',
      views: 456,
      text: 'Товар не соответствует описанию. В характеристиках указано 128 ГБ памяти, а по факту 64 ГБ. Отзыв удален продавцом через несколько часов после публикации.',
      screenshots: 5,
    },
    {
      id: 3,
      marketplace: 'Яндекс Маркет',
      seller: 'ЭлектроДом',
      product: 'Умная колонка Mini',
      article: 'YM-11223344',
      rating: 1,
      status: 'verified',
      date: '2024-10-28',
      views: 189,
      text: 'Получил б/у товар вместо нового. На коробке следы вскрытия, на устройстве царапины. Продавец не реагирует на претензии, а отзыв на маркетплейсе был удален.',
      screenshots: 4,
    },
    {
      id: 4,
      marketplace: 'Магнит Маркет',
      seller: 'ДомТехники',
      product: 'Блендер PowerMix 3000',
      article: 'MM-55667788',
      rating: 2,
      status: 'moderation',
      date: '2024-10-27',
      views: 98,
      text: 'Товар сломался на второй день использования. Гарантийный ремонт отказались принимать, ссылаясь на механическое повреждение, которого не было.',
      screenshots: 2,
    },
    {
      id: 5,
      marketplace: 'Wildberries',
      seller: 'СтильМода',
      product: 'Зимняя куртка Premium',
      article: 'WB-99887766',
      rating: 1,
      status: 'verified',
      date: '2024-10-26',
      views: 567,
      text: 'Описание товара не соответствует действительности. Заявлен натуральный пух, по факту - синтетический наполнитель. Продавец удалил все негативные отзывы.',
      screenshots: 6,
    },
    {
      id: 6,
      marketplace: 'OZON',
      seller: 'КрасотаЗдоровье',
      product: 'Набор косметики Luxury',
      article: 'OZ-44556677',
      rating: 1,
      status: 'verified',
      date: '2024-10-25',
      views: 321,
      text: 'Получила подделку вместо оригинальной продукции. Упаковка отличается, запах и консистенция не те. Отзыв был удален через час после публикации.',
      screenshots: 7,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Каталог отзывов
          </h1>
          <p className="text-lg text-muted-foreground">
            Все отзывы, которые были удалены на маркетплейсах
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-12 mb-8">
          <div className="md:col-span-5">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Поиск по артикулу, продавцу или товару..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="md:col-span-3">
            <Select value={marketplace} onValueChange={setMarketplace}>
              <SelectTrigger>
                <SelectValue placeholder="Маркетплейс" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все маркетплейсы</SelectItem>
                <SelectItem value="wildberries">Wildberries</SelectItem>
                <SelectItem value="ozon">OZON</SelectItem>
                <SelectItem value="yandex">Яндекс Маркет</SelectItem>
                <SelectItem value="magnit">Магнит Маркет</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-3">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Сначала новые</SelectItem>
                <SelectItem value="popular">Популярные</SelectItem>
                <SelectItem value="rating">По рейтингу</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-1">
            <Button variant="outline" className="w-full">
              <Icon name="SlidersHorizontal" className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {reviews.map((review) => (
            <Card 
              key={review.id} 
              className="hover:shadow-xl transition-all hover:scale-[1.01] cursor-pointer group overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="font-mono text-xs">
                        {review.article}
                      </Badge>
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
                      <Badge variant="secondary">
                        <Icon name="Image" className="mr-1 h-3 w-3" />
                        {review.screenshots} фото
                      </Badge>
                    </div>
                    <CardTitle className="text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
                      {review.product}
                    </CardTitle>
                    <CardDescription className="flex flex-col md:flex-row md:items-center gap-2 text-base">
                      <span className="flex items-center gap-1">
                        <Icon name="Store" className="h-4 w-4" />
                        {review.marketplace}
                      </span>
                      <span className="hidden md:inline">•</span>
                      <span className="flex items-center gap-1">
                        <Icon name="User" className="h-4 w-4" />
                        {review.seller}
                      </span>
                    </CardDescription>
                  </div>
                  
                  <div className="flex flex-row md:flex-col items-center md:items-end gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className={`h-5 w-5 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-2xl font-bold">{review.rating}.0</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {review.text}
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 border-t">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" className="h-4 w-4" />
                      {review.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Eye" className="h-4 w-4" />
                      {review.views} просмотров
                    </span>
                  </div>
                  
                  <Button variant="outline" className="group/btn">
                    Читать полностью
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg">
            Загрузить еще
            <Icon name="ChevronDown" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
