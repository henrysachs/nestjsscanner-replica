import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import * as shell from 'shelljs';
@Processor('scan_scm')
export class SCMConsumer {
  @Process()
  async transcode(job: Job<unknown>) {
    console.log('scm-info2');
    console.log('test');
    console.log(job.data);
    // Run external tool synchronously
    const result = await shell.exec('ls -la', { async: true });
    console.log(result.exitCode);
    if (result.exitCode !== 0) {
    }

    return result;
  }
}
