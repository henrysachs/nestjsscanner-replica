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
    console.log('cleanup');
    const result3 = shell.exec('cd .. && rm -rf leaky-local-dir');
    // Run external tool synchronously
    const result = shell.exec(
      'git clone git@github.com:henrysachs/my-leaky-repo.git leaky-local-dir && cd $_',
    );
    const result2 = shell.exec(
      'gitleaks --path="$PWD/leaky-local-dir"  --config-path=/Users/henrysachs/Projekte/playground/nestjsscanner-replica/.gitleaks/config.toml -v --report=my-report.json --redact',
    );
    if (result2.code !== 0) {
      console.log('leaks found');
      const rawdata = fs.readFileSync('my-report.json');
      const secretReport = JSON.parse(rawdata);
      console.log(secretReport);
    }
    const result4 = shell.exec(
      `trufflehog "file:///$PWD/leaky-local-dir" --json --exclude_paths /Users/henrysachs/Projekte/playground/nestjsscanner-replica/.gitleaks/exclude-patterns.txt > trufflehog-report.json`,
    );
    if (result4.code !== 0) {
      console.log('leaks found');
      const rawdata2 = fs.readFileSync('trufflehog-report.json');
      const secretReport2 = JSON.parse(rawdata2);
      console.log(secretReport2);
    }
    console.log(result4.code);
    console.log(result2.code);

    return result;
  }
}
