import "./styles.css";

// function onClickAdd() {
//   alert();
// }

const onClickAdd = (e) => {
  // var input-value = document.getElementById("input-id");
  var input = document.getElementById("input-id").value;
  document.getElementById("input-id").value = "";
  var list = document.getElementsByClassName("list");
  console.log(list);
  // alert();
  // div tag
  var div = document.createElement("div");
  div.className = "list-low";
  // p tag
  var li = document.createElement("li");
  li.textContent = input;

  div.appendChild(li);
  var parent = document.getElementById("parent-ul");

  const com_button = document.createElement("button");
  com_button.textContent = "完了";
  // 完了ボタン押下時
  com_button.addEventListener("click", () => {
    // alert("完了");
    var div2 = document.createElement("div");
    div.className = "list-low";
    // p tag
    var li2 = document.createElement("li");
    li2.textContent = input;
    div2.appendChild(li2);
    div2.className = "list-low";
    var parent2 = document.getElementById("com-ul");
    const re_button = document.createElement("button");
    re_button.textContent = "戻る";
    // 戻るボタン
    re_button.addEventListener("click", () => {
      // alert("back");
      // 削除
      const deleteT = re_button.parentNode;
      document.getElementById("com-ul").removeChild(deleteT);
      const text = re_button.parentNode.firstElementChild.textContent;
      alert(text);
      createImvompleteList(text);
    });
    div2.appendChild(re_button);
    parent2.appendChild(div2);
    console.log(div2);
    const deleteT = del_button.parentNode;
    document.getElementById("parent-ul").removeChild(deleteT);
  });
  // 削除ボタン
  const del_button = document.createElement("button");
  del_button.textContent = "削除";
  del_button.addEventListener("click", () => {
    alert("削除");
    const deleteT = del_button.parentNode;
    document.getElementById("parent-ul").removeChild(deleteT);
  });
  div.appendChild(com_button);
  div.appendChild(del_button);

  parent.appendChild(div);

  // buttonの追加
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//　未完了に追加するリスト
const createImvompleteList = (text) => {
  var input = text;
  document.getElementById("input-id").value = "";
  var list = document.getElementsByClassName("list");
  console.log(list);
  // alert();
  // div tag
  var div = document.createElement("div");
  div.className = "list-low";
  // p tag
  var li = document.createElement("li");
  li.textContent = input;

  div.appendChild(li);
  var parent = document.getElementById("parent-ul");

  const com_button = document.createElement("button");
  com_button.textContent = "完了";
  // 完了ボタン押下時
  com_button.addEventListener("click", () => {
    // alert("完了");
    var div2 = document.createElement("div");
    div.className = "list-low";
    // p tag
    var li2 = document.createElement("li");
    li2.textContent = input;
    div2.appendChild(li2);
    div2.className = "list-low";
    var parent2 = document.getElementById("com-ul");
    const re_button = document.createElement("button");
    re_button.textContent = "戻る";
    // 戻るボタン
    re_button.addEventListener("click", () => {
      // alert("back");
      // 削除
      const deleteT = re_button.parentNode;
      document.getElementById("com-ul").removeChild(deleteT);
      const text = re_button.parentNode.firstElementChild.textContent;
      createImvompleteList(text);
    });
    div2.appendChild(re_button);
    parent2.appendChild(div2);
    console.log(div2);
    const deleteT = del_button.parentNode;
    document.getElementById("parent-ul").removeChild(deleteT);
  });
  // 削除ボタン
  const del_button = document.createElement("button");
  del_button.textContent = "削除";
  del_button.addEventListener("click", () => {
    // alert("削除");
    const deleteT = del_button.parentNode;
    document.getElementById("parent-ul").removeChild(deleteT);
  });
  div.appendChild(com_button);
  div.appendChild(del_button);

  parent.appendChild(div);
};
