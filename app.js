const shareButtons = document.querySelectorAll('.tile-share-button, .share-button');

async function copyText(e) {
    // Prevent button going to the site
    e.preventDefault();
    e.stopPropagation(); // Prevent event from bubbling up to parent link

    const link = this.getAttribute('link');
    console.log(link);

    try {
        await navigator.clipboard.writeText(link);
        alert("Copied the text: " + link);
    } catch (err) {
        console.error(err);
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText)
);
