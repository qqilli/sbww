// Example blog post data
const blogPosts = [
    {
        title: 'Building Responsive Websites with Bootstrap',
        summary: 'This article will introduce how to quickly build a responsive website using the Bootstrap framework. We will start from the basics and gradually explore Bootstrap\'s grid system, components, and utility classes.',
        date: '2024-03-15',
        category: 'Technical Articles'
    },
    {
        title: 'Programming Languages Worth Learning in 2024',
        summary: 'As technology continues to evolve, programming languages are constantly updating and iterating. This article will analyze the most popular programming languages in 2024 to help you make the right learning choices.',
        date: '2024-03-10',
        category: 'Technical Articles'
    },
    {
        title: 'My Reading Reflections',
        summary: 'I recently finished reading several interesting books. Here I would like to share my reading thoughts and insights. Hope this helps fellow book lovers.',
        date: '2024-03-05',
        category: 'Reading Notes'
    }
];

// 渲染博客文章列表
function renderBlogPosts() {
    const blogPostsContainer = document.querySelector('.blog-posts');
    let html = '';

    blogPosts.forEach(post => {
        html += `
            <div class="card mb-4">
                <div class="card-body">
                    <h2 class="card-title">${post.title}</h2>
                    <p class="card-text text-description">${post.summary}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">${post.date}</small>
                        <span class="badge bg-secondary">${post.category}</span>
                    </div>
                    <a href="#" class="btn btn-primary mt-3">Read More</a>
                </div>
            </div>
        `;
    });

    blogPostsContainer.innerHTML = html;
}

// 页面加载完成后渲染文章列表
document.addEventListener('DOMContentLoaded', renderBlogPosts);