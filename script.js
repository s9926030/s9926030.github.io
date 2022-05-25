//table展開
$(function() {
    $('.expandChildTable').on('click', function() {
        $(this).toggleClass('selected').closest('tr').next().toggle();
    })
});
//搜尋
var $rows = $('.table1 tr+tr+tr');
$('#search').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
    $rows.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
});
//全選、全不選
$(function () {
    $(".checkAll").click(function () {
      var isCheck = $(this).prop("checked");
      $(this).closest(".childTableRow").find("input[type='checkbox']").prop("checked", isCheck);
    });
    
    $(".childTableRow input[type='checkbox']").click(function () {
      
    var el_checkAll = $(this).closest(".childTableRow").find(".checkAll");
      
    var checkLength = $(this).closest(".childTableRow").find("input[type='checkbox']:checked").length;// 每區塊目前被V的有幾個
      
    var inputLength =
      $(this).closest(".childTableRow").find("input[type='checkbox']").length-1; // 每區塊的核取框有多少
      
    
      if (!$(this).prop("checked")) {
        el_checkAll.prop("checked", false);
      } else {
        if (checkLength == inputLength) {
            el_checkAll.prop("checked", true);
        }
      }
    });
   
  });
 //儲存checkbox選項
 let boxes = document.getElementsByClassName('cbsort').length;

function save() {	
  for(let i = 1; i <= boxes; i++){
	  var checkbox = document.getElementById(String(i));
    localStorage.setItem("checkbox" + String(i), checkbox.checked);	
  }
}

//for loading
for(let i = 1; i <= boxes; i++){
  if(localStorage.length > 0){
    var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
    document.getElementById(String(i)).checked = checked;
  }
}
window.addEventListener('change', save);

//打勾後顯示表格
function show_table(){
  document.getElementById("item_talbe").style.display='block';
  var m = $("[name='show']:checked").val();
$(function () { //.table1 .hat:checkbox');選擇class="hat" 就是顯示帽子
    let cbList = $('.table1 .'+m+':checkbox');
    /**
     * 自動計算需要幾列，並建立表格
     */
    let nRows = cbList.length > 0 ? (cbList.length /26+1) : 0;
    let trHtml = '<tr><th class="row-title"></td>'
        + '<td class="text"></td>'.repeat(26)
        + '</tr>';
    $('div.myTable>table>tbody').html(trHtml.repeat(nRows));
    $('.row-title').each((idx, td) => {
        $(td).text(String(1+idx));
    });

    /**
     * 處理使用者變更時的事件
     */
    let tdList = $('.text'); //暫存寫入目標，避免每次查詢
    let n = 0; //紀錄(上次)填寫到第幾格
    function onCheckChange() {
        let k = 0;
        cbList.each((idx, cb) => {
            if (cb.checked) {
                tdList[k++].innerHTML = "<img src='"+cb.value+"'>";
            }
        });
        //清空第 k ~ n 格
        for (let i = k; i < n; ++i) {
          tdList[i].innerHTML = '';
      }
      n = k;
    }
    //監聽外層容器即可
    $('.table1').on('change', onCheckChange);
    onCheckChange();
});};


$( "img" ).lazyload();
