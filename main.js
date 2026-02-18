(function () {
    const incrementEl = document.getElementById('button-inc');
    const decrementEl = document.getElementById('button-dec');
    const clearEl = document.getElementById('button-clr');
    const currentEl = document.getElementById('current-count');
    const errorEl = document.getElementById('error');
    let current = 0;
    
    function setCurrent(){
        currentEl.innerText = current;
    }
    
    function setError(showError = false){
        errorEl.classList.toggle('show', showError);
        errorEl.classList.toggle('hide', !showError);
    }
    
    function handleIncrement() {
        current++;
        setCurrent();
        setError();
    }
    
    function handleDecrement(){
        if(current !== 0){
            current--;
            setCurrent();
            setError();
        } else {
            setError(true);
        }
    }
    
    function handleClear() {
        current = 0;
        setCurrent();
        setError();
    }
    
    incrementEl?.addEventListener('click', handleIncrement);
    decrementEl?.addEventListener('click', handleDecrement);
    clearEl.addEventListener('click', handleClear)
})()