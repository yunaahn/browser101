const items = document.querySelector('.items');
const input =document.querySelector('.footer_input');
const addBtn=document.querySelector('.footer_button');

function onAdd(){
    //사용자가 입력한 텍스트 받아옴
    const text=input.value;
    console.log(text);
    //새로운 아템 만듬 텍스트+삭제버튼
    const item = createItem(text);
   
    //아이템 컨테이너 안에 새 아이템 추가
   items.appendChild(item);
    
    //인풋촉화 포커스
    input.value='';
    input.focus();
    }

    function createItem(text){
        const itemRow=document.createElement('li');
        itemRow.setAttribute('class','item_row');

        const item=document.createElement('div');
        item.setAttribute('class','item');
        
        const name = document.createElement('span');
        name.setAttribute('class','item_name');
        name.innerText=text;
        
        const itemDivider=document.createElement('div');
        itemDivider.setAttribute('class','item_divider');

        

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute=('class', 'item_delete');
        deleteBtn.innerHTML ='<i class="fas fa-trash-alt"></i>';
        deleteBtn.addEventListener('click',()=>{
            items.removeChild(itemRow);
        });

        const itemDivider=document.createElement('div');
        itemDivider.setAttribute('class','item_divider');

        item.appendChild(name);
        item.appendChild(deleteBtn);

        itemRow.appendChild(item);
        itemRow.appendChild(itemDivider);
        return itemRow;
    }

addBtn.addEventListener('click',()=>{
    onAdd();
});