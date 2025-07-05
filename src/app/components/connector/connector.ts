import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FFlowModule} from '@foblex/flow';

@Component({
  selector: 'connector',
  imports: [FFlowModule],
  template: '',
  styleUrl: './connector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Connector {
}
