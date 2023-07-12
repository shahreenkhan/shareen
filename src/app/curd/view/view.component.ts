import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/service/user.service';
import { CurdService } from '../service/curd.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
id:any
curdviewdata:any
view:any
form:any
data:any
data1:any
editdata: any;
showform: boolean = false;

constructor(private cs:CurdService, private r :ActivatedRoute, public userser:UserService, private router:Router) { }

  ngOnInit(): void {

    this.form=new FormGroup({
      title:new FormControl('',[Validators.required]),
      body:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
    })

    this.id=this.r.snapshot.paramMap.get('id')
    console.log(this.id)

    this.cs.viewdata(this.id).subscribe((res)=>{
      console.log(res);
      this.curdviewdata=res
      this.view=this.curdviewdata.Viewdata

      
      this.editdata=res
      this.form.patchValue({
        // patchvalue fn. is used to update only a subset of the elements of the FormGroup
        title: this.curdviewdata.viewdata.title,
        body: this.curdviewdata.viewdata.body,
        description: this.curdviewdata.viewdata.description,
      })
    })
  }



  showEdit(){
    this.showform = !this.showform
  }

  update() {
    this.cs.update(this.form.value, this.id).subscribe((res) => {
      console.log(res);
      // this.data=res
      // this.data1=this.data.crudupdate
      this.router.navigate(['/curd']);
    })
  }

  deletecurd(){
    this.id = this.r.snapshot.paramMap.get('id');
    console.log(this.id);
    this.cs.delete(this.id).subscribe((res)=>{
      // console.log(res);
      this.router.navigate(['/curd']);
    })
  }

}
