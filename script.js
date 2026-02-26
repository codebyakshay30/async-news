async function getNews() {
    const container = document.getElementById("newsContainer");
    container.innerHTML = "⏳ Loading news...";

    try {
        const response = await fetch(
  "https://gnews.io/api/v4/top-headlines?country=in&lang=en&max=5&apikey=1d27058afdaf3c076c27376c9799826d"
);

        const data = await response.json();

        container.innerHTML = "";

        data.articles.forEach(article => {
            container.innerHTML += `
                <div style="margin-bottom:15px; padding:10px; border-bottom:1px solid #ccc;">
                    <h4 style="margin:0;">${article.title}</h4>
                    <p style="font-size:14px; margin:5px 0;">${article.description || ""}</p>
                    <a href="${article.url}" target="_blank" style="color:#1f4037;">Read more</a>
                </div>
            `;
        });

    } catch (error) {
        container.innerHTML = "❌ Failed to load news.";
    }
}
