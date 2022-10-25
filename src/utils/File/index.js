export function exportFileJson(fileName, data) {
   let dataStr = JSON.stringify(data);
   let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
   let exportFileDefaultName = `${fileName}.json`;

   let linkElement = document.createElement('a');
   linkElement.setAttribute('href', dataUri);
   linkElement.setAttribute('download', exportFileDefaultName);
   linkElement.click();
}
export function exportToExcel(tableSelect, filename){
   var downloadLink;
   var dataType = 'application/vnd.ms-excel';
   var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
   
   // Specify file name
   filename = filename?filename+'.xls':'excel_data.xls';
   
   // Create download link element
   downloadLink = document.createElement("a");
   
   document.body.appendChild(downloadLink);
   
   if(navigator.msSaveOrOpenBlob){
       var blob = new Blob(['\ufeff', tableHTML], {
           type: dataType
       });
       navigator.msSaveOrOpenBlob( blob, filename);
   }else{
       downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
   
       downloadLink.download = filename;
       downloadLink.click();
   }
}
