import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/service/user.service';
import { Curd } from '../model/curd';
import { CurdService } from '../service/curd.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  tabledisplay:any
  data1:any
  data:any
  res:any
  form:any
Data$: Observable<Curd[]> | undefined
constructor(private CS:CurdService, private route:Router ,public US:UserService) { }



  ngOnInit(): void {

    this.form=new FormGroup({
      title:new FormControl('',[Validators.required]),
      // image:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
    })
    
    this.CS.getdata().subscribe((res)=>{
      // res is call back function
      // console.log(res)
      this.data=res
      this.data1=this.data.curds
      // console.log(this.data1)
     })
  }


  add(){
    if (this.form.valid) {
     this.CS.insertdata(this.form.value).subscribe((res)=>{
       console.log(res);
       this.form.reset();
       this.route.navigate(['/curd']);
     })
    }
   }

//    onSelectFile(event:any){
//     console.log(event.target.files);
//    if(event.target.files.length>0){
//      const file = event.target.files[0];
//      this.data.get('image')?.setValue(file)
//       }
   
//  }
// addimg(){
//     const formData = new FormData();
//     // formData.append('title',this.data.get('title')?.value);
//     // formData.append('description',this.data.get('description')?.value);
//     formData.append('image',this.data.get('image')?.value);
    
//     console.log(this.data.value);
//     this.CS.imageinsert(formData).subscribe((res)=>{
//       this.data.reset()
//        this.data1=this.data.image
//        console.log(res);
//     });
//   }

  }

