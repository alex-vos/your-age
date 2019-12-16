var age = +prompt( 'введите ваш возраст!');

var you = ''

if( 0 <= age && age <= 17 ){
    you = 'вам еще учится и учится'
}else if( 17 <= age && age <= 60){
    you = 'вам еще работать и работать!'
}else if( 60 <= age && age <= 100){
    you = 'вам пора на пенсию!'
}else if( 100 <= age && age <= 150){
    you = 'вашим внукам пора на пенсию!'
}else{
    you = 'вам пора на покой'
}    


alert(you)