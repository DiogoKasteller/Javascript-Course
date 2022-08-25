const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const tabBtn = document.getElementById('tab-btn')
const deleteBtn = document.getElementById('delete-btn')
const ulEl = document.getElementById('ul-el')
let myLeads = []
let oldLeads = []

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value)
  localStorage.setItem('myLeads', JSON.stringify(myLeads))
  inputEl.value = ''
  render(myLeads)
})

tabBtn.addEventListener('click', function () {
  // Grab the URL of the current tab
  tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    let activeTab = tabs[0]
    let activeTabId = activeTab.id
  })
  myLeads.push(tabs[0].url)
  localStorage.setItem('myLeads', JSON.stringify(myLeads))
  render(myLeads)
})

deleteBtn.addEventListener('click', function () {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

function render(leads) {
  let listItems = ''
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]} 
                </a>
            </li>
        `
  }

  ulEl.innerHTML = listItems
}
