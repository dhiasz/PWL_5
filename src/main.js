let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-between items-center mb-2`;
   task.innerHTML = `
         <p class="text-gray-800">${title}</p>
            <div class="flex gap-2">
               <input type="button" value="SELESAI" data-task="${task.id}"
                  class="font-bold bg-green-100 text-black px-3 py-1 rounded cursor-pointer hover:bg-green-200">
               <input type="button" value="HAPUS" data-task="${task.id}"
                  class="font-bold bg-red-100 text-black px-3 py-1 rounded cursor-pointer hover:bg-red-200">
            </div>`;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}
