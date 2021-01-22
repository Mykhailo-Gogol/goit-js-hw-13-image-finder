...
Небольшое приложение поиска и просмотра изображений по ключевому слову.

Для HTTP-запросов использую публичный Pixabay API.

Pixabay API поддерживает пагинацию, в ответе приходит по 12 объектов, установленых в параметре per_page. По умолчанию параметр page равен 1. При каждом последующем запросе page увеличивается на 1, а при поиске по новому ключевому слову сбрасывает его значение в 1.

Каждое изобаржение описывается объектом.

Создает DOM-элемент используя шаблонизацию от Handlebars.

Для иконок используются Material icons. 

При нажатии на кнопку Load more догружается следующая порция изображений и рендериться вместе с предыдущими.

Страница  автоматически плавно проскроливается после рендера изображений ровно на один экран, чтобы перевести пользователя на начало загруженных изображений. Используя window.scrollTo().

Добавлен плагин нотификаций Pnotify, и показывает нотификации на результат HTTP-запросов
Добавить функционал отображения большой версии изображения через плагин модального окна (например basicLightbox), при клике на изображение галереи.

TODO: Вместо кнопки Load more можно сделать бесконечную загрузку при скроле используя Intersection Observer.
...
