// calculate 
const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', function(){
    // input collection
    const incomeInput = document.getElementById('incomeInput');
    const incomeInputValue = parseFloat(incomeInput.value);
    
    const softwareInput = document.getElementById('softwareInput');
    const softwareInputValue = parseFloat(softwareInput.value);
    
    const coursesInput = document.getElementById('coursesInput');
    const coursesInputValue = parseFloat(coursesInput.value);
    
    const internetInput = document.getElementById('internetInput');
    const internetInputValue = parseFloat(internetInput.value);

    // calculate income and expenses
    const expenses = softwareInputValue + coursesInputValue + internetInputValue;
    const totalIncome = incomeInputValue - expenses;
    
    // income input validation
    if(isNaN(incomeInputValue)){
        const incomeError = document.getElementById('incomeError');
        incomeError.classList.remove('hidden');
        return;
    };

    if(expenses > totalIncome){
        const logicError = document.getElementById('logicError');
        logicError.classList.remove('hidden');
        return;
    }

    // result
    const results = document.getElementById('results');
    results.classList.remove('hidden');

    const totalExpenses = document.getElementById('totalExpenses');
    totalExpenses.innerText = expenses.toFixed(2);

    
    const balance = document.getElementById('balance');
    balance.innerText = totalIncome.toFixed(2);

    // total expenses cannot exceed your income! (error message)
    const logicError = document.getElementById('logicError');
    logicError.classList.add('hidden');

    // history tab card details
    const historyCardDiv = document.createElement('div');
    historyCardDiv.classList.add(
        "bg-white",
        "p-3", 
        "rounded-md",
        "shadow-sm", 
        "border-l-2", 
        "border-yellow-500"
    );

    historyCardDiv.innerHTML =
    `
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500">Income: $${incomeInputValue}</p>
        <p class="text-xs text-gray-500">Expenses: $${expenses}</p>
        <p class="text-xs text-gray-500">Balance: $${totalIncome}</p>

    `;

    const historyList = document.getElementById('historyList');
    historyList.insertBefore(historyCardDiv, historyList.firstChild);

});

// calculate savings
const calculateSavingsBtn = document.getElementById('calculateSavingsBtn');

calculateSavingsBtn.addEventListener('click', function(){
    // input collection
    const incomeInput = document.getElementById('incomeInput');
    const incomeInputValue = parseFloat(incomeInput.value);
    
    const softwareInput = document.getElementById('softwareInput');
    const softwareInputValue = parseFloat(softwareInput.value);
    
    const coursesInput = document.getElementById('coursesInput');
    const coursesInputValue = parseFloat(coursesInput.value);
    
    const internetInput = document.getElementById('internetInput');
    const internetInputValue = parseFloat(internetInput.value);

    // calculate income and expenses
    const expenses = softwareInputValue + coursesInputValue + internetInputValue;
    const totalIncome = incomeInputValue - expenses;

    // calculate total income to savings
    const savingsInput = document.getElementById('savingsInput');
    const savingsValue = parseFloat(savingsInput.value);

    const calculateSavings = (totalIncome * savingsValue) / 100;
    const remainingBalances = totalIncome - calculateSavings;

    // result
    const remainingBalance = document.getElementById('remainingBalance');
    remainingBalance.innerText = remainingBalances.toFixed(2);

    const savingsAmount = document.getElementById('savingsAmount');
    savingsAmount.innerText = calculateSavings.toFixed(2);

});

// income input validation
const incomeInput = document.getElementById('incomeInput');

incomeInput.addEventListener('input', function(){
    const incomeInput = document.getElementById('incomeInput');
    const incomeInputValue = parseFloat(incomeInput.value);

    if(incomeInputValue < 0){
        const incomeError = document.getElementById('incomeError');
        incomeError.classList.remove('hidden');
        return;
    }else{
        const incomeError = document.getElementById('incomeError');
        incomeError.classList.add('hidden');
    };
});

// software input validation
const softwareInput = document.getElementById('softwareInput');

softwareInput.addEventListener('input', function(){
    const softwareInput = document.getElementById('softwareInput');
    const softwareInputValue = parseFloat(softwareInput.value);

    if(softwareInputValue < 0){
        const SoftwareError = document.getElementById('SoftwareError');
        SoftwareError.classList.remove('hidden');
        return;
    }else{
        const SoftwareError = document.getElementById('SoftwareError');
        SoftwareError.classList.add('hidden');
    };
});

// courses input validation
const coursesInput = document.getElementById('coursesInput');

coursesInput.addEventListener('input', function(){
    const coursesInput = document.getElementById('coursesInput');
    const coursesInputValue = parseFloat(coursesInput.value);

    if(coursesInputValue < 0){
        const coursesError = document.getElementById('coursesError');
        coursesError.classList.remove('hidden');
        return;
    }else{
        const coursesError = document.getElementById('coursesError');
        coursesError.classList.add('hidden');
    };
});

// internet input validation
const internetInput = document.getElementById('internetInput');

internetInput.addEventListener('input', function(){
    const internetInput = document.getElementById('internetInput');
    const internetInputValue = parseFloat(internetInput.value);

    if(internetInputValue < 0){
        const internetError = document.getElementById('internetError');
        internetError.classList.remove('hidden');
        return;
    }else{
        const internetError = document.getElementById('internetError');
        internetError.classList.add('hidden');
    };
});

// savings input validation
const savingsInput = document.getElementById('savingsInput');

savingsInput.addEventListener('input', function(){
    const savingsInput = document.getElementById('savingsInput');
    const savingsInputValue = parseFloat(savingsInput.value);

    if(savingsInputValue < 0){
        const savingsError = document.getElementById('savingsError');
        savingsError.classList.remove('hidden');
        return;
    }else{
        const savingsError = document.getElementById('savingsError');
        savingsError.classList.add('hidden');
    };
});

// assistant tab functionality
const assistantTab = document.getElementById('assistantTab');

assistantTab.addEventListener('click', function(){
    const assistantTab = document.getElementById('assistantTab');
    assistantTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );

    assistantTab.classList.remove(
        "text-gray-600"
    )

    const historyTab = document.getElementById('historyTab');
    historyTab.classList.add(
        "text-gray-600"
    );

    historyTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );

    const expenseForm = document.getElementById('expenseForm');
    expenseForm.classList.remove('hidden');

    const historySection = document.getElementById('historySection');
    historySection.classList.add('hidden');
});

// history tab functionality
const historyTab = document.getElementById('historyTab');

historyTab.addEventListener('click', function(){
    const historyTab = document.getElementById('historyTab');
    historyTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );

    historyTab.classList.remove(
        "text-gray-600"
    );

    const assistantTab = document.getElementById('assistantTab');
    assistantTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );

    assistantTab.classList.add(
        "text-gray-600"
    );

    const expenseForm = document.getElementById('expenseForm');
    expenseForm.classList.add('hidden');

    const historySection = document.getElementById('historySection');
    historySection.classList.remove('hidden', 'shadow-md');

    const results = document.getElementById('results');
    results.classList.add('mb-5');
});