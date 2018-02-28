import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';
import { arc } from 'd3-shape';

export function d3Arc(params, { innerRadius, outerRadius, startAngle, endAngle }) {
  let arcFn = arc().outerRadius(outerRadius).innerRadius(innerRadius);
  if (isPresent(startAngle) && isPresent(endAngle)) {
    arcFn.startAngle(startAngle).endAngle(endAngle);
  }
  return arcFn;
}

export default helper(d3Arc);
