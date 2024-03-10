

let Guest_List :string[] =['salman' ,'ayaz' ,'haris '];

   // for (let i = 0; i < Guest_List.length; i++) {
  
   // console.log('Dear Mr. ' + Guest_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\nThank You!\n\n ');
 
   // }
    
  let absent_Guest :string ='ayaz';

    let new_Guest :string ='Muzammil';
    
    Guest_List[1] =  new_Guest;

    for(let i=0; i<Guest_List.length; i++){

        console.log('Dear Mr. ' + Guest_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\nThank You!\n\n ')
    }

    console.log(`Mr. ${absent_Guest} is not coming to the party `) 

    console.log('Good news! we find big table so we are inviting 3 more guest. ')

    Guest_List.unshift('Riwan');
    Guest_List.splice(2 , 0 , 'Qasim');
    Guest_List.push('fareed')

    for(let i=0; i<Guest_List.length; i++){

        console.log('Dear Mr. ' + Guest_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\nThank You!\n\n ')
    }
    