import React from 'react'
import Link from 'next/link'

import formatThousand from 'src/helpers/formatThousand'

export default function RenderItem({item}) {
    return (
        <div className="w-1/6 h-60 px-4">
            <div className="card relative h-full transition-all duration-300">
                {item.imageName}

                <div className="card-meta mt-10">
                    <h4 className="text-lg font-medium transition-all duration-200 w-1/2">
                        {item.name}
                    </h4>
                    <h5 className="text-sm transition-all mt-2 duration-500">
                        { formatThousand(item.total) }
                    </h5>
                </div>

                <Link href="/courses/[slug]" as={`/courses/${item.id}`}>
                    <a className="link-wrapped"></a>
                </Link>
            </div>
        </div>
    )
}
