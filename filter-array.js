function panggilFilter(namaBenua) {
  var arr = [
    {negara: 'Indonesia', benua:'Asia'},
    {negara: 'Jerman',benua:'Eropa'},
    {negara: 'Spanyol', benua:'Eropa'},
    {negara: 'Mesir', benua: 'Afrika'},
    {negara: 'Korea', benua: 'Asia'}
  ];
  var negaraBenua = arr.filter(function(item) {
    return item.benua === namaBenua;
  });
  return negaraBenua;
}
console.log(panggilFilter('Asia'));
