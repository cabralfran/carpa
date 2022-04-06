import { BadRequestException, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): any {
    const response = { hi: 'Hello World 🌎️', env: 'main' };
    this.logger.log(`response -> ${JSON.stringify(response)}`);
    return response;
  }

  private wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async sayHi(delay: number): Promise<any> {
    if (!delay) delay = 0;
    await this.wait(delay);
    return { hi: `Hi from the mascot verse after ${delay}ms 😎👍️` };
  }
}
