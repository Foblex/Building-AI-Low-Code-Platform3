import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FFlowModule} from '@foblex/flow';
import {Node} from '../node/node';
import {DATA} from '../../domain/data';

@Component({
  selector: 'flow-palette',
  imports: [FFlowModule],
  templateUrl: './flow-palette.html',
  styleUrl: './flow-palette.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlowPalette {

  protected nodes = DATA;
}
