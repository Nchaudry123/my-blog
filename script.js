        const posts = document.querySelectorAll('.blog-post');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const currentPageEl = document.getElementById('currentPage');
        const totalPagesEl = document.getElementById('totalPages');       
        let currentIndex = 0;
        totalPagesEl.textContent = posts.length;
        function showPost(index) {
            posts[currentIndex].classList.add('page-exiting');         
            setTimeout(() => {
                posts[currentIndex].classList.remove('active', 'page-exiting');
                currentIndex = index;       
                posts[currentIndex].classList.add('active', 'page-entering');  
                currentPageEl.textContent = currentIndex + 1;
                prevBtn.disabled = currentIndex === 0;
                nextBtn.disabled = currentIndex === posts.length - 1;
                setTimeout(() => {
                    posts[currentIndex].classList.remove('page-entering');
                }, 1000); }, 500); }
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                showPost(currentIndex - 1);
            } });
        nextBtn.addEventListener('click', () => {
            if (currentIndex < posts.length - 1) {
                showPost(currentIndex + 1);
            }  });
