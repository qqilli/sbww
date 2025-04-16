// 示例博客文章数据
const blogPosts = [
    {
        title: '使用Bootstrap构建响应式网站',
        summary: '本文将介绍如何使用Bootstrap框架快速构建一个响应式的网站。我们将从基础开始，逐步深入Bootstrap的栅格系统、组件和工具类的使用方法。',
        date: '2024-03-15',
        category: '技术文章'
    },
    {
        title: '2024年值得学习的编程语言',
        summary: '随着技术的不断发展，编程语言也在不断更新迭代。本文将分析2024年最受欢迎的编程语言，帮助你做出正确的学习选择。',
        date: '2024-03-10',
        category: '技术文章'
    },
    {
        title: '我的读书心得',
        summary: '最近读完了几本很有意思的书，在这里分享一下我的读书心得和感悟。希望能够帮助到同样热爱阅读的朋友们。',
        date: '2024-03-05',
        category: '读书笔记'
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
                    <a href="#" class="btn btn-primary mt-3">阅读全文</a>
                </div>
            </div>
        `;
    });

    blogPostsContainer.innerHTML = html;
}

// 页面加载完成后渲染文章列表
document.addEventListener('DOMContentLoaded', renderBlogPosts);