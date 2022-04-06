import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger: Logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): any {
    return this.appService.getHello();
  }

  @Get('/say-hi')
  async sayHi(@Query('delay') delay: number): Promise<any> {
    return await this.appService.sayHi(delay);
  }
}
