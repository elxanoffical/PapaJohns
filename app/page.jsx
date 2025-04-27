// app/blog/page.jsx

const blogs = [
  { id: 1, title: "New Event At Baku", desc: "Hakuna matata", publisher: "Zahid", date: "17 Nov 2024" },
  { id: 2, title: "checkin",       desc: "Huba Muba",     publisher: "Elxan", date: "23 Oct 2025" },
];

export default function BlogPage() {
  return (
    <main className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Pizza menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.desc}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>By {blog.publisher}</span>
                <time dateTime={new Date(blog.date).toISOString()}>
                  {blog.date}
                </time>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
