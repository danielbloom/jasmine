<?php

namespace Jasmine\Jasmine\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static void route(callable $group = null, callable $authedGroup = null)
 *
 * @method static array getLocales()
 * @method static void registerLocales(array $locales)
 *
 * @method static array getInterfaceLocales()
 * @method static void registerInterfaceLocale(string $locale, string|array $strings)
 * @method static array getInterfaceLocale(string $locale)
 *
 * @method void registerPermission(string $key)
 * @method array getPermissions()
 * @method array getPermissionFields()
 *
 * @method static array getBreadables()
 * @method static void registerBreadable(string $breadable, bool $addMenuItem = true, ?int $menuPriority = null)
 *
 * @method static void registerPage(string $page, bool $addMenuItem = true)
 * @method static array getPage(string $pageSlug)
 *
 * @method static void registerSideBarMenuItem(string $id, \Closure $item, ?int $priority = 50)
 * @method static void registerSideBarSubMenuItem(string $parent, string $id, \Closure $item, ?int $priority = 50)
 * @method static array getSideBarMenuItems()
 *
 * @method static array getCustomJses()
 * @method static array getCustomStyles()
 * @method static void registerCustomJs(string $path)
 * @method static void registerCustomStyle(string $path)
 */
class Jasmine extends Facade { protected static function getFacadeAccessor(): string { return 'jasmine'; } }
