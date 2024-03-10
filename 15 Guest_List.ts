//Qeustion no 15 :Changing Guest List

let Guest_List :string[] =['salman' ,'ayaz' ,'haris '];

    for(let i=0; i<Guest_List.length; i++){

        console.log('Dear Mr. ' + Guest_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\nThank You!\n\n ')
    }

    let absent_Guest :string ='ayaz';

    let new_Guest :string ='Muzammil';
    
    Guest_List[1] =  new_Guest;

    for(let i=0; i<Guest_List.length; i++){

        console.log('Dear Mr. ' + Guest_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\nThank You!\n\n ')
    }

    console.log(`Mr. ${absent_Guest} is not coming to the party `) 