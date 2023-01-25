window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const box = this.document.getElementById("waybill")
            console.log(box);
            console.log(window);
            var opt = {
                margin: 1,
                filename: document.getElementById("waybillbox").value + '.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
            };
            html2pdf().from(box).set(opt).save();
        })
}


function clearForm(){
    document.getElementsByTagName("body")[0] = "";
}