import React from 'react'
import LoadingSpinner from '../loading spinner/LoadingSpinner';

const ContactList = () => {
     let contactList=[
  // --- WORK GROUP ---
  { id: 1, name: "Aarav Sharma", email: "aarav.sharma@work.com", phone: "+91 98765 43210", group: "Work" },
  { id: 2, name: "Priya Patel", email: "priya.patel@work.com", phone: "+91 98765 43211", group: "Work" },
  { id: 3, name: "Rohan Gupta", email: "rohan.gupta@work.com", phone: "+91 98765 43212", group: "Work" },
  { id: 4, name: "Ananya Iyer", email: "ananya.iyer@work.com", phone: "+91 98765 43213", group: "Work" },
  { id: 5, name: "Vikram Malhotra", email: "vikram.m@work.com", phone: "+91 98765 43214", group: "Work" },
  { id: 6, name: "Neha Singh", email: "neha.singh@work.com", phone: "+91 98765 43215", group: "Work" },
  { id: 7, name: "Karan Verma", email: "karan.verma@work.com", phone: "+91 98765 43216", group: "Work" },
  { id: 8, name: "Divya Nair", email: "divya.nair@work.com", phone: "+91 98765 43217", group: "Work" },
  { id: 9, name: "Amit Joshi", email: "amit.joshi@work.com", phone: "+91 98765 43218", group: "Work" },
  { id: 10, name: "Sneha Rao", email: "sneha.rao@work.com", phone: "+91 98765 43219", group: "Work" },
  { id: 11, name: "Rahul Deshmukh", email: "rahul.d@work.com", phone: "+91 98765 43220", group: "Work" },
  { id: 12, name: " पूजा ulkarni", email: "pooja.k@work.com", phone: "+91 98765 43221", group: "Work" },
  { id: 13, name: "Manish Kumar", email: "manish.kumar@work.com", phone: "+91 98765 43222", group: "Work" },
  { id: 14, name: "Swati Menon", email: "swati.menon@work.com", phone: "+91 98765 43223", group: "Work" },
  { id: 15, name: "Abhishek Roy", email: "abhishek.roy@work.com", phone: "+91 98765 43224", group: "Work" },
  { id: 16, name: "Meera Pillai", email: "meera.pillai@work.com", phone: "+91 98765 43225", group: "Work" },
  { id: 17, name: "Siddharth Das", email: "siddharth.das@work.com", phone: "+91 98765 43226", group: "Work" },
  { id: 18, name: "Tanvi Kulkarni", email: "tanvi.k@work.com", phone: "+91 98765 43227", group: "Work" },
  { id: 19, name: "Alok Nambiar", email: "alok.n@work.com", phone: "+91 98765 43228", group: "Work" },
  { id: 20, name: "Nidhi Shah", email: "nidhi.shah@work.com", phone: "+91 98765 43229", group: "Work" },

  // --- FAMILY GROUP ---
  { id: 21, name: "Ramesh Sharma", email: "ramesh.sharma@family.com", phone: "+91 98111 11101", group: "Family" },
  { id: 22, name: "Sunita Sharma", email: "sunita.sharma@family.com", phone: "+91 98111 11102", group: "Family" },
  { id: 23, name: "Kunal Sharma", email: "kunal.sharma@family.com", phone: "+91 98111 11103", group: "Family" },
  { id: 24, name: "Geeta Patel", email: "geeta.patel@family.com", phone: "+91 98111 11104", group: "Family" },
  { id: 25, name: "Suresh Patel", email: "suresh.patel@family.com", phone: "+91 98111 11105", group: "Family" },
  { id: 26, name: "Alok Gupta", email: "alok.gupta@family.com", phone: "+91 98111 11106", group: "Family" },
  { id: 27, name: "Rekha Gupta", email: "rekha.gupta@family.com", phone: "+91 98111 11107", group: "Family" },
  { id: 28, name: "Ashok Iyer", email: "ashok.iyer@family.com", phone: "+91 98111 11108", group: "Family" },
  { id: 29, name: "Radha Iyer", email: "radha.iyer@family.com", phone: "+91 98111 11109", group: "Family" },
  { id: 30, name: "Manoj Verma", email: "manoj.verma@family.com", phone: "+91 98111 11110", group: "Family" },
  { id: 31, name: "Anita Verma", email: "anita.verma@family.com", phone: "+91 98111 11111", group: "Family" },
  { id: 32, name: "Vijay Nair", email: "vijay.nair@family.com", phone: "+91 98111 11112", group: "Family" },
  { id: 33, name: "Lata Nair", email: "lata.nair@family.com", phone: "+91 98111 11113", group: "Family" },
  { id: 34, name: "Deepak Joshi", email: "deepak.joshi@family.com", phone: "+91 98111 11114", group: "Family" },
  { id: 35, name: "Shanti Joshi", email: "shanti.joshi@family.com", phone: "+91 98111 11115", group: "Family" },

  // --- FRIENDS GROUP ---
  { id: 36, name: "Arjun Mehta", email: "arjun.m@friends.com", phone: "+91 97222 22201", group: "Friends" },
  { id: 37, name: "Nikhil Rao", email: "nikhil.rao@friends.com", phone: "+91 97222 22202", group: "Friends" },
  { id: 38, name: "Ritu Sen", email: "ritu.sen@friends.com", phone: "+91 97222 22203", group: "Friends" },
  { id: 39, name: "Sameer Khan", email: "sameer.khan@friends.com", phone: "+91 97222 22204", group: "Friends" },
  { id: 40, name: "Zoya Akhtar", email: "zoya.akhtar@friends.com", phone: "+91 97222 22205", group: "Friends" },
  { id: 41, name: "Kabir Bedi", email: "kabir.bedi@friends.com", phone: "+91 97222 22206", group: "Friends" },
  { id: 42, name: "Natasha Roy", email: "natasha.roy@friends.com", phone: "+91 97222 22207", group: "Friends" },
  { id: 43, name: "Varun Dhawan", email: "varun.dhawan@friends.com", phone: "+91 97222 22208", group: "Friends" },
  { id: 44, name: "Kriti Sanon", email: "kriti.sanon@friends.com", phone: "+91 97222 22209", group: "Friends" },
  { id: 45, name: "Harshvardhan", email: "harsh.v@friends.com", phone: "+91 97222 22210", group: "Friends" },
  { id: 46, name: "Shreya Ghoshal", email: "shreya.g@friends.com", phone: "+91 97222 22211", group: "Friends" },
  { id: 47, name: "Arijit Singh", email: "arijit.s@friends.com", phone: "+91 97222 22212", group: "Friends" },
  { id: 48, name: "Armaan Malik", email: "armaan.m@friends.com", phone: "+91 97222 22213", group: "Friends" },
  { id: 49, name: "Darshan Raval", email: "darshan.r@friends.com", phone: "+91 97222 22214", group: "Friends" },
  { id: 50, name: "Jubin Nautiyal", email: "jubin.n@friends.com", phone: "+91 97222 22215", group: "Friends" }
];
    
//  let {name}=contact
//  console.log(name);
 
    
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col d-flex flex-wrap justify-content-between align-items-center my-2">
                    {
                        contactList.length>0?contactList.map((contact,index)=>
                        
                    <div className="card col-5 my-2 mx-2 border border-1" key={contact.id}>
                         <div className="card-header">
                            <h3 className='text-center card-title'>Profile Card</h3>
                         </div>
                         <div className="card-body">
                            <div className="card-text">{contact.name}</div>
                            <div className="card-text">{contact.email}</div>
                            <div className="card-text">{contact.phone}</div>
                         </div>
                         <div className="card-footer">
                             <h3>{contact.group}</h3>
                         </div>
                    </div>
                        ):<LoadingSpinner/>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactList