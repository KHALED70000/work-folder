function ReactCountHeart() {
    const heart_count = document.getElementById('heart_count');
    heart_count.innerText = parseInt(heart_count.innerText) + 1;
};



//copy function
function copy(e) {
    const copy_btn = e.currentTarget;
    const btn_father = copy_btn.parentElement;
    const btn_grand_father = btn_father.parentElement;

    const text = btn_grand_father.querySelector('b').innerText;

    navigator.clipboard.writeText(text);
    alert('Copied the text: ' + text);

    const copy_counter = document.getElementById('copy_counter');
    copy_counter.innerText = parseInt(copy_counter.innerText) + 1;
};


//Phone call function
function call(e) {
    const call_btn = e.currentTarget;
    const btn_father = call_btn.parentElement;
    const btn_grand_father = btn_father.parentElement;

    const number = btn_grand_father.querySelector('b').innerText;
    const service_name = btn_grand_father.querySelector('p').innerText;

    const coin_amount = parseInt(document.getElementById('coin_count').innerText);
    if (coin_amount < 20) {
        alert('❌ Not enough coins to make a call. You need at least 20 coins.');
        return;
    } 
    else {

        const new_coin_amount = coin_amount - 20;
        document.getElementById('coin_count').innerText = new_coin_amount;

        if (window.innerWidth <= 600) {
            // For mobile devices
            window.location.href = `tel:${number}...`;
        } else {
            // For desktop devices
            alert('📞' + 'Calling ' + service_name +' '+ number + '...');
        }
    };

};

