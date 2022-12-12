import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-canvas';
  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef;

  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
    
    if (context) {
      context.strokeStyle = 'blue';
      context.fillStyle = 'rgb(5, 0, 30, 0.35)';
      this.drawRectangle(context);
      this.drawTriangle(context);
      this.drawArc(context);
      this.drawCurve(context);
      this.drawLine(context);
      this.drawText(context);
    }
  }

  drawRectangle(context: CanvasRenderingContext2D) {
    context.fillRect(20, 20, 100, 100);
    context.clearRect(40, 40, 30, 30);
    context.strokeRect(50, 50, 10, 10);
  }

  drawTriangle(context: CanvasRenderingContext2D) {
    context.lineWidth = 6;
    context.lineJoin = 'round';
    context.beginPath();
    context.moveTo(150, 70);
    context.lineTo(200, 20);
    context.lineTo(200, 120);
    //context.fill();
    context.closePath();
    context.stroke();
    context.lineWidth = 1;
  }

  drawArc(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(210, 60, 80, (Math.PI / 180) * 0, (Math.PI / 180) * 90);
    //context.stroke();
    //context.closePath();
    context.fill();
  }

  drawCurve(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.moveTo(280, 20);
    context.quadraticCurveTo(260, 0, 240, 20);
    context.stroke();

    context.moveTo(280, 60);
    context.bezierCurveTo(200, 0, 200, 60, 250, 60);
    context.stroke();
  }

  drawLine(context: CanvasRenderingContext2D) {
    context.lineWidth = 6;
    context.lineCap = 'round';
    context.beginPath();
    context.moveTo(150, 130);
    context.lineTo(50, 130);
    context.stroke();

  }

  drawText(context: CanvasRenderingContext2D) {
    context.fillText('Hello Canvas', 5 , 12);
  }
}
