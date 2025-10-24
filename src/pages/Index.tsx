import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'Digital Marketing Platform',
      description: 'Комплексная платформа для управления маркетинговыми кампаниями',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      title: 'E-commerce Solution',
      description: 'Современный интернет-магазин с продвинутой аналитикой',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'
    },
    {
      title: 'Corporate Website',
      description: 'Представительский сайт с уникальным дизайном',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Алексей Петров',
      company: 'Tech Startup',
      text: 'Профессиональная команда создала для нас невероятный сайт. Качество работы на высшем уровне!',
      rating: 5
    },
    {
      name: 'Мария Иванова',
      company: 'Fashion Brand',
      text: 'Современный дизайн и отличная функциональность. Рекомендуем всем!',
      rating: 5
    },
    {
      name: 'Дмитрий Соколов',
      company: 'Digital Agency',
      text: 'Быстро, качественно, профессионально. Именно то, что нужно для бизнеса.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">DESIGN-DAO</div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`hover:text-blue-500 transition-colors ${
                  activeSection === 'home' ? 'text-blue-500' : ''
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('order')}
                className={`hover:text-blue-500 transition-colors ${
                  activeSection === 'order' ? 'text-blue-500' : ''
                }`}
              >
                Заказать
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`hover:text-blue-500 transition-colors ${
                  activeSection === 'about' ? 'text-blue-500' : ''
                }`}
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className={`hover:text-blue-500 transition-colors ${
                  activeSection === 'reviews' ? 'text-blue-500' : ''
                }`}
              >
                Отзывы
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">Веб дизайн</h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Создаём современные веб-решения, которые выделяют ваш бизнес на фоне конкурентов
            </p>
            <Button
              onClick={() => scrollToSection('order')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            >Портфолио</Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-blue-500" />
        </div>
      </section>

      <section id="order" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-xl text-gray-400">Портфолио выполненных работ</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-white/10 overflow-hidden group hover:border-blue-500/50 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  >
                    Посмотреть проект
                    <Icon name="ExternalLink" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg rounded-full"
            >Заказать дизайн</Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl font-bold mb-6">О нашей студии</h2>
              <p className="text-xl text-gray-400 mb-6">
                Мы — команда профессионалов, специализирующихся на создании современных веб-решений.
                Наша миссия — превращать идеи в успешные цифровые продукты.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Icon name="Code" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Современные технологии</h4>
                    <p className="text-gray-400">Используем последние веб-стандарты</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Опытная команда</h4>
                    <p className="text-gray-400">5+ лет на рынке веб-разработки</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Icon name="Rocket" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Быстрая реализация</h4>
                    <p className="text-gray-400">Соблюдаем сроки и бюджет</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team"
                className="rounded-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-400">Что говорят о нас наши клиенты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-white/10 p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              WEB DESIGN STUDIO
            </div>
            <p className="text-gray-400 mb-6">Создаём будущее вместе с вами</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Icon name="Phone" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Icon name="MapPin" size={24} />
              </a>
            </div>
            <p className="text-gray-600 text-sm mt-8">© 2024 Web Design Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;