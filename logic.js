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
    alert('✅ The phone number copied: ' + text);

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
    const Bangla_service_name = btn_grand_father.querySelector('h3').innerText;

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
            alert('📞' + 'Calling ' + service_name + ' ' + number + '...');
        }
    };

    const History_Container = document.getElementById('history_container');
    let Time = new Date().toLocaleTimeString();

    let Data_Container = [];
    Data_Container.push({ service_name: Bangla_service_name, number: number, time: Time });
    let history = `
        <div class="bg-[#FAFAFA] flex justify-between items-center py-2 px-[12px] mb-[10px] rounded-[10px] transform_any">
                            <div >
                                <h4 class="text-[18px]">${Bangla_service_name}</h4>
                                <p class="text-[18px]">${number}</p>
                            </div>
                            <span class="text-[18px]">${Time}</span>
                        </div>
    `;

    History_Container.innerHTML += history;
    History_Container.classList.remove('remove_any');
};


//clear function
function clearCallHistory() {
    const History_Container = document.getElementById('history_container');
    History_Container.classList.add('remove_any');
    setTimeout(() => {
        History_Container.innerHTML = '';
    }, 200);
};