import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import * as shell from 'shelljs';
const fs = require('fs');

@Processor('scan_scm')
export class SCMConsumer {
  @Process()
  async transcode(job: Job<unknown>) {
    console.log('scm-info2');
    console.log('test');
    console.log(job.data);
    // Run external tool synchronously
    const result = shell.exec(
      'gitleaks --path=$(pwd) --config-path=/mnt/d/Projects/nestjsscanner-replica/.gitleaks/config.toml -v --report=my-report.json --redact',
    );
    if (result.code !== 0) {
      console.log('leaks found');
      let rawdata = fs.readFileSync('my-report.json');
      let student = JSON.parse(rawdata);
      console.log(student);
    }
    console.log(result.code);

    return result;
  }
}
