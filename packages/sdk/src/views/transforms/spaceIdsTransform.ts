import { Membership } from '../../sync-agent/timeline/models/timeline-types'
import { isSpaceStreamId } from '../../id'
import isEqual from 'lodash/isEqual'

export function spaceIdsTransform(
    memberships: Record<string, Membership>,
    _prev: Record<string, Membership>,
    prevResult?: string[],
): string[] {
    const spaceIds = Object.entries(memberships)
        .filter(([id, membership]) => isSpaceStreamId(id) && membership === Membership.Join)
        .map(([id]) => id)
        .sort((a, b) => a.localeCompare(b))
    if (prevResult && isEqual(prevResult, spaceIds)) {
        return prevResult
    }
    return spaceIds
}
