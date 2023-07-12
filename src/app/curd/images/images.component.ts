import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CurdService } from '../service/curd.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
data:any
data1:any
  constructor(private cs:CurdService) { }

  ngOnInit(): void {
    this.data=new FormGroup({
      title:new FormControl(''),
      image:new FormControl('')
    })

  }

  onSelectFile(event:any){
    // console.log(event.target.files);
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.data.get('image')?.setValue(file)
      
    }
    
  }
  imageinsert(){
    const formData = new FormData();
    formData.append('title',this.data.get('title')?.value);
   
    formData.append('image',this.data.get('image')?.value);
    
    console.log(this.data.value);
    this.cs.imageinsert(formData).subscribe((res)=>{
      this.data.reset()
    //  this.data1=this.data.image
      // console.log(res);
    });
  }

   imageDisplay(){
  this.cs.imagedisplay().subscribe((res)=>{
    console.log(res)
    this.data=res
  })
}
}
