import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Ipost } from '../model/service/ipost';
import { Router } from '@angular/router';
import { PostService } from '../model/service/post.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-blog',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [PostService],
  templateUrl: './form-blog.component.html',
  styleUrls: ['./form-blog.component.scss']
})
export class FormBlogComponent {
  post: Ipost = {
    title: '',
    author: '',
    date: new Date(),
    content: 0,
    description: '',
    imageUrl: '',
  };

  constructor(private postService: PostService, private router: Router) {}

  // Método para enviar o formulário
  onSubmit(): void {
    // Enviar o produto ao serviço PostService
    this.postService.addPost(this.post).subscribe(
      (response) => {
        Swal.fire({
          title: "Item Cadastrado!",
          text: "success",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/']);
          }
        });
      },
      (error) => {
        console.error('Erro ao adicionar o produto:', error);
      }
    );
  }
}
