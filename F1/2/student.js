   //删除
   function DelFun () {
        var table = document.getElementById('list');
        var tr = arguments[0].parentElement.parentElement;
        table.deleteRow(tr.rowIndex);
    }  
    //增加
    function AddFun () {
        var table = document.getElementById('list');
        var stuName = document.getElementById('stuName').value;
        var sex = document.getElementsByName('sex')[0].checked 
                         ? document.getElementsByName('sex')[0].value 
                         : document.getElementsByName('sex')[1].value;
        var code = document.getElementById('code').value;
		var grade = document.getElementById('grade').value;
		var major = document.getElementById('major').value;
         
        var tr = table.insertRow(table.rows.length);
        var temp = [stuName, sex, code , grade, major];
        for (var i = 0; i < temp.length; i++) {
            var td = tr.insertCell(tr.cells.length);
            td.innerText = temp[i];
        }
        var td = tr.insertCell(tr.cells.length);
        var btn = document.createElement('input');
        btn.setAttribute('type','button');
        btn.onclick = function () {
            DelFun(this);
        }
        btn.value = '删除';
        td.appendChild(btn);
         
        var btn = document.createElement('input');
        btn.setAttribute('type','button');
        btn.onclick = function () {
            EditFun(this);
        }
        btn.value = '修改';
        td.appendChild(btn);
    }
     //修改
    var editIndex = -1;
    function EditFun () {
        var tr = arguments[0].parentElement.parentElement;
        tr.style.backgroundColor = '#87ceeb';
        editIndex = tr.rowIndex;
        document.getElementById('stuName').value = tr.children[0].innerText;
		if (tr.children[1].innerText == '男') {
            document.getElementsByName('sex')[0].checked = true;
        } else {
            document.getElementsByName('sex')[1].checked = true;
        }
        document.getElementById('code').value = tr.children[2].innerText;
		document.getElementById('grade').value = tr.children[3].innerText;
		document.getElementById('major').value = tr.children[4].innerText;
    }
     //更新
    function OverFun () {
        var table = document.getElementById('list');
        var tr = table.rows[editIndex];
        var stuName = document.getElementById('stuName').value;
        var sex = document.getElementsByName('sex')[0].checked 
                         ? document.getElementsByName('sex')[0].value 
                         : document.getElementsByName('sex')[1].value;
        var code = document.getElementById('code').value;
		var grade = document.getElementById('grade').value;
		var major = document.getElementById('major').value;
         
        var temp = [stuName, sex, code, grade, major];
        for (var i = 0; i < temp.length; i++) {
            tr.cells[i].innerText = temp[i];
        }
        tr.style.backgroundColor = '';
    }