import { createNavigation } from 'next-intl/navigation'
import { routing } from './config'

// Create navigation helpers with locale support
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
